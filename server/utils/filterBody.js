
module.exports = {
    filteredBody (body, whitelist) {
        const items = {};
        console.log(body);
        Object.keys(body).forEach(key => {
        if (whitelist.indexOf(key) >= 0) {
            items[key] = body[key];
    
        }
        });
        console.log(items);
        return items;
  }
}