export const protect = (req, res, next) => {
  // TEMP: mock user for Phase 1
  req.user = { id: "000000000000000000000001" };
  next();
};
