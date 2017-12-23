<%- insertFragment('imports') %>
<%- insertFragment('init') %>

module.exports = function(generator) {
  let { props } = generator;
  <%- insertFragment('func_init') %>

  let config = {
    <%- insertFragment('host', [
      'host: ' + `${props.name}-app.feathersjs.com` + ',',
      'port: ' + `PORT` + ',',
    ]) %>
    <%- insertFragment('config_more') %>
  };

  <%- insertFragment('func_return') %>
  return config;
};

<%- insertFragment('funcs') %>
<%- insertFragment('end') %>