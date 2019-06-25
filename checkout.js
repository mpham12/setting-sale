function isName(items){
  return items.name === 'iPhone Charger'
}

export function selectSaleItems(items) {
  return items.filter(isName)
}