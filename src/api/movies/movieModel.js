import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({ 
    id: {
      type: Number, 
      required: true, 
      index: {
        unique: true
      }
    }, 
    title: {
      type: String, 
      required: true
     }, 
     year: {
       type: Number, 
       required: true
     }, 
     actors: [{
       type : mongoose.Schema.ObjectId, 
       ref : 'Actor'
     }]
  });
  
MovieSchema.statics.findByMovieDBId = function (id) {
    return this.findOne({ id: id });
};

export default mongoose.model('Movie', MovieSchema);