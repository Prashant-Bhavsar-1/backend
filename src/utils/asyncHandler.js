const asynchandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asynchandler };

/*
--->> Defination : A function that takes one or more functions as arguments or returns a function is called a higher-order function."

--->this is how line number 10 comes we remove "{}" from the line no.9.
    const asynchandler = ()=>{}
    const asynchandler = (fn)=>{()=>{}}
    const asynchandler = (fn)=>{async()=>{}}

const asynchandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};
*/
