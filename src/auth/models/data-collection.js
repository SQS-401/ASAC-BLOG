class Collection {
    
  constructor(model) {
      this.model = model;
  }

  async create(obj) {
      // let newRecord =  await this.model.create(obj);
      // return newRecord;
      try {
          return await this.model.create(obj);
      } catch(e) {
          console.error('error creating the new record for model: ', this.model.name)
      }
  }

  async read(id) {
      try{
          let records = null;
          if (id) {
              // get specific row
              records = await this.model.findOne({where: {id: id }});
          } else {
              // get all data
              records = await this.model.findAll();
          }
          return records;
      } catch(e) {
          console.error('error read the record(s) for model: ', this.model.name, `id: ${id}`)
      }

  }

  async update(id, obj) {
      try{
          let recordById = await this.model.findOne({where: {id}});
          let updated = await recordById.update(obj);
          return updated;
      } catch(e) {
          console.error('error updating the record for model: ', this.model.name, `id: ${id}`)
      }
    
  }

  async delete(id) {

      if (!id) throw new Error(' No ID is provided !!! for model: ', this.model.name);

      try {
          let deleted = await this.model.destroy({where: {id}});
          return deleted; // or return directly withot creating a variable
      } catch(e) {
          console.error('error deleting the record for model: ', this.model.name, `id: ${id}`)
      }
  }
}

module.exports = Collection;














// 'use strict';

// class DataCollection {

//     constructor(model) {
//       this.model = model;
//     }
  
//     get(id) {
//       if (id) {
//         return this.model.findOne({ id });
//       }
//       else {
//         return this.model.findAll({});
//       }
//     }
  
//     create(record) {
//       return this.model.create(record);
//     }
  
//     update(id, data) {
//       return this.model.findOne({ where: { id } })
//         .then(record => record.update(data));
//     }
  
//     delete(id) {
//       return this.model.destroy({ where: { id }});
//     }
  
//   }
  
//   module.exports = DataCollection;