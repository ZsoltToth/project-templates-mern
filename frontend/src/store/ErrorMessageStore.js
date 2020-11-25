import {EventEmitter} from 'events';
import {default as dispatcher} from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ComplexNumberActionConstants'

class ErrorMessageStore extends EventEmitter{

    _errorMsg = "";

    emitChage(){
        this.emit('Change');
    }

    addOnChangeListener(callback){
        this.addListener('Change', callback);
    }

    removeOnChangeListener(callback){
        this.removeListener('Change',callback);
    }
}
const store = new ErrorMessageStore();
export default store;

dispatcher.register(({action,payload})=>{
    console.log({action : action, payload : payload});
    if(action !== actionConstants.showError){
        return;
    }
    store._errorMsg = payload;
    store.emitChage();
});

dispatcher.register(({action})=>{
   if(action !== actionConstants.clearError) return;
   store._errorMsg = "";
   store.emitChage();
});
