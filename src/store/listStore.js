import { observable } from 'mobx';

let index = 0;

class ObservableListStore {
  @observable list = [];

  addListItem(item) {
    this.list.push({
      name: item,
      items: [],
      index
    });

    index++;
  }

  removeListItem(item) {
    this.list = this.list.filter( listItem => {
      listItem.index !== item.index;
    });
  }

  addItem(item, itemToPush) {
    this.list.forEach( (l) => {
      if(l.index === itemToPush.index) {
        l.items.push(itemToPush);
      }
    });
  }
}

const observableStore = new ObservableListStore();
export default observableStore;
