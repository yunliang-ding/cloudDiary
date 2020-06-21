'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async saveorupdateAction() {
    try {
      const taskEntity = this.post()
      let { id } = taskEntity
      if (id) { // update
        let affectedRows = await this.model('task').where({ id }).update(taskEntity);
        this.json({
          code: 200,
          affectedRows
        })
      } else { // new
        let insertId = await this.model('task').add(taskEntity)
        this.json({
          code: 200,
          insertId
        })
      }
    } catch (error) {
      this.json({
        code: 500,
        error
      })
    }
  }
  async listAction() {
    try {
      let data = await this.model('task').where({user_name: this.get('user_name')}).page(this.get('current'), this.get('pageSize')).order({id: 'desc'}).countSelect()
      this.json({
        code: 200,
        data
      })
    } catch (error) {
      this.json({
        code: 500,
        error
      })
    }
  }
  async getAction() {
    try {
      let data = await this.model('task').where({ id: this.get('id') }).find()
      this.json({
        code: 200,
        data
      })
    } catch (error) {
      this.json({
        code: 500,
        error
      })
    }
  }
  async deleteAction() {
    try {
      let affectedRows = await this.model('task').where({id: this.post('id')}).delete()
      this.json({
        code: 200,
        affectedRows
      })
    } catch (error) {
      this.json({
        code: 500,
        error
      })
    }
  }
}