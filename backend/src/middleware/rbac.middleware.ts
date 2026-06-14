import { Response, NextFunction } from "express";

export const authorize = (...permissions: string[]) => {
  return async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      await user.populate({
        path: "role",
        populate: {
          path: "permissions",
        },
      });

      const userPermissions =
        user.role?.permissions?.map(
          (p: any) => p.name
        ) || [];

      const allowed = permissions.some(
        (permission) =>
          userPermissions.includes(permission)
      );

      if (!allowed) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Authorization failed",
      });
    }
  };
};