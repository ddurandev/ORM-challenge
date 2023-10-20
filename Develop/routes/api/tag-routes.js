const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try{
    const products = Tag.findAll()
    res.json(products)
  } catch(err){
    res.json(err)
  };
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  try{
    const products = Tag.findOne({
      where: {id:req.params.id}
    })
    res.json(products)
  } catch(err){
    res.json(err)
  };
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  try{
    const tag = Tag.create(req.body)
    res.json(tag)
  } catch(err){
    res.json(err)
  }
  // create a new tag
});

router.put('/:id', (req, res) => {
  try{
    const tag = Tag.update(req.body, {
      where: {id:req.params.id}
    })
    res.json(tag)
  }catch(err){res.json(err)}
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  try{
    const tag = Tag.destroy({
      where: {id:req.params.id}
    })
    res.json(tag)
  } catch(err){
    res.json(err)
  };
  // delete on tag by its `id` value
});

module.exports = router;
