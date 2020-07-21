const addTrade = async (req, res) => {
  const tradeExists = await req.context.models.Trade.find({
    id: req.body.id,
  }).lean();

  if (tradeExists.length) {
    return res.status(400).json(`Trade with the id ${req.body.id} exists`);
  }

  try {
    const trade = await req.context.models.Trade.create({
      id: req.body.id,
      type: req.body.type,
      user: req.body.user,
      symbol: req.body.symbol,
      shares: req.body.shares,
      price: req.body.price,
      timestamp: req.body.timestamp,
    });

    delete trade._id;

    return res.status(201);
  } catch (e) {
    console.log(e);
    return res.status(500).json('Could not save the trade!');
  }
};

/**
 * Add more trade routes here
 */

const getAllTrades = async (req, res) => {
  const trades = await req.context.models.Trade.find({}, { _id: 0 }).lean();
  if (!trades) {
    return res.status(404).json('No trades found');
  }

  return res.status(200).json(trades);
};

const getUsersTrades = async (req, res) => {
  const trades = await req.context.models.Trade.find(
    { id: req.params.id },
    { _id: 0 }
  ).lean();
  if (!trades) {
    return res.status(404).json('No trades found');
  }

  return res.status(201);
};

export { addTrade, getAllTrades, getUsersTrades };
