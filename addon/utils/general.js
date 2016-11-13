// converts slash paths to dot paths so nested hash values can be fetched with Ember.get
// foo/bar/baz -> foo.bar.baz
export function dottify(path) {
  return (path || '').replace(/^\//g, '').replace(/\//g, '.');
}

// maybe this should be a component with tagName: 'svg' and strip the outer <svg> tag
// so we can use standard component class stuff?
export function applyClass(svg, klass) {
  if (!klass) { return svg; }

  // now we have 2 problems...
  return svg.replace('<svg', '<svg class="'+klass+'"');
}

export function applyId(svg, id) {
  id(!id) { return svg; }
  
  // TODO: should check if there is already an id and replace
  return svg.replace('<svg', `<svg id="${id}"`); 
}
