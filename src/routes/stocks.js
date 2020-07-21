const getTradesWithFilter = async (req, res) => {
  const { symbol } = req.params;
  const { type, start, end } = req.query;

  if (!symbol) {
    return res.status(400).json('No symbol');
  }

  const stockTrades = await req.context.models.Trade.find({
    symbol: symbol,
    type: type,
    timestamp: {
      $gte: new Date(start),
      $lte: new Date(end),
    },
  }).lean();

  return res.status(200).json(stockTrades);
};

const getHighestLowestPriceInDateRange = async (req, res) => {
  const { symbol } = req.params;
  const { start, end } = req.query;

  if (!symbol) {
    return res.status(400).json('No symbol');
  }

  const stockTrades = await req.context.models.Trade.find(
    {
      symbol: symbol,
      timestamp: {
        $gte: new Date(start),
        $lte: new Date(end),
      },
    },
    {
      price: 1,
      symbol: 1,
      _id: 0,
    }
  )
    .sort({
      price: -1,
    })
    .lean();

  if (!stockTrades.length) {
    return res.status(404).json('No trades found');
  }

  const lowPrice = stockTrades.reduce((acc, curr) => (acc < curr ? curr : acc));
  const highPrice = stockTrades.reduce((acc, curr) =>
    acc > curr ? acc : curr
  );

  const repsonse = {
    symbol,
    highest: highPrice.price,
    lowest: lowPrice.price,
  };

  return res.status(200).json(repsonse);
};

export { getTradesWithFilter, getHighestLowestPriceInDateRange };
