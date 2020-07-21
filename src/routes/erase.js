// Delete route
const erase = async (req, res) => {
  try {
    await req.context.models.Trade.deleteMany({});
    return res.status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json('Something went wrong while erasing the DB');
  }
};

export { erase };
