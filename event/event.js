import events from 'events';

const em =new events();
em.on('demo',()=>{
    console.log("demo")
});
setTimeout(function(){
    em.emit('demo');
},6000)
