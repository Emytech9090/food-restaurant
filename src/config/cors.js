const corsOption = {
  credentials: true,
  methods: ["POST", "GET", "PATCH", "DELETE"],
  origin: "*",
  maxAge: 3600,
};
export default corsOption;
