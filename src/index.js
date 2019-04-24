import isArray from '@indlekofer/is_array';
export default (data) => {
  if (typeof data === 'undefined') return false;
  else if (data === null) return false;
  else if (typeof data === 'function') return false;
  else if (isArray(data) === true) return false;
  else if (typeof data === 'object') return true;
  else return false;
};
