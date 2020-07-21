import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['buy', 'sell'],
  },
  user: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  symbol: {
    type: String,
    required: true,
  },
  shares: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
  },
});

const Trade = mongoose.model('trade', tradeSchema);

export default Trade;
