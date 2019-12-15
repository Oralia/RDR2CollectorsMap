var Marker = function(text, lat, lng, tool, day, category, subdata, video) {
  this.text = text;
  this.lat = lat;
  this.lng = lng;
  this.tool = tool;
  this.title = Language.get(`${text}.name`);
  this.day = Cycles.data.cycles[currentCycle][category];
  this.description = Language.get(`${text}_${this.day}.desc`);
  this.category = category;
  this.subdata = subdata;
  this.video = video;
  this.isVisible = enabledCategories.includes(category);
  this.amount = inventory[text] == null ? 0 : inventory[text].amount;
  this.isCollected = inventory[text] == null ? false : (inventory[text].isCollected);//collectedItems.includes(text);
  this.canCollect = Inventory.isEnabled ? this.amount < Inventory.stackSize && !this.isCollected : !this.isCollected;
}
