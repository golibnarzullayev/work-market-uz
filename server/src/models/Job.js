const { model, Schema } = require('mongoose')
const { schemaOptions } = require('./schemaOptions')

const jobSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   slugifyUrl: {
       type: String,
       required: true
   },
   description: {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: true
   },
   salary: {
      type: String,
      required: true
   },
   jobsTypeId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'JobsType'
   },
   categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category'
   }
}, schemaOptions)

module.exports = model('Job', jobSchema)