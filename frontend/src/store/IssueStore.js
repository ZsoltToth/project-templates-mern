import {EventEmitter} from 'events';
import dispatcher from "../dispatcher/Dispatcher";
import * as actions from '../dispatcher/IssueActionConstants';

class IssueStore extends EventEmitter{

    _qeTasks = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.addListener('Change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change',callback);
    }
}

const store = new IssueStore();
export default store;

dispatcher.register(({action,payload})=>{
    if(action !== actions.refreshTasks ) return;
    store._qeTasks = payload;
    store.emitChange();
});
