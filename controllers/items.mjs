export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  const createItem = async (req, res) => {
    console.log(req.body);

    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).send('Wrong input');
    }
    try {
      const newItem = await db.Item.create({ name, description, price });
      res.send({ newItem });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    createItem,
  };
}
