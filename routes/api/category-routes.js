const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const products = await Category.findAll()
    res.json(products)
  } catch(err){
    res.json(err)
  };
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  try{
    const products = Category.findOne({
      where: {id:req.params.id}
    })
    res.json(products)
  } catch(err){
    res.json(err)
  };
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  try{
    const categories = Category.create(req.body)
    res.json(categories)
  } catch(err){
    res.json(err)
  }
  // create a new category
});

router.put('/:id', (req, res) => {
  try{
    const categories = Category.update(req.body, {
      where: {id:req.params.id}
    })
    res.json(categories)
  }catch(err){res.json(err)}
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  try{
    const categories = Category.destroy({
      where: {id:req.params.id}
    })
    res.json(categories)
  } catch(err){
    res.json(err)
  };
  // delete a category by its `id` value
});

module.exports = router;
