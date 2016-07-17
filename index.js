// Tomorrow Night Theme

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = '#fff';
      action.config.backgroundColor = '#17252C';
      action.config.cursorColor = '#373b41';
      action.config.colors = [
        '#17252C',
        '#EC5F67',
        '#99C794',
        '#FAC863',
        '#6699CC',
        '#C594C5',
        '#5FB3B3',
        '#FFFFFF',
        '#65737E',
        '#Ec5F67',
        '#99C794',
        '#FAC863',
        '#6699CC',
        '#C594C5',
        '#5FB3B3',
        '#FFFFFF'
      ];
      action.config.css = '.title_1i8co95 { color: #c5c8c6 !important }'
  }
  next(action)
}
