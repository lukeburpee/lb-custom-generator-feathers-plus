
// Initializes the `users1` service on path `/users-1`. (Can be re-generated.)
const createService = require('feathers-memory');
const hooks = require('./users-1.hooks');
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app) {

  let paginate = app.get('paginate');
  // !code: func_init // !end

  let options = {
    name: 'users-1',
    paginate,
    // !code: options_more // !end
  };
  // !code: options_change // !end

  // Initialize our service with any options it requires
  app.use('/users-1', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users-1');

  service.hooks(hooks);
  // !code: func_return // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
