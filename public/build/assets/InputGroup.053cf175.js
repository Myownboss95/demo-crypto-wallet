import{a as d,b as u,m as a,v as n,d as l,e as i,w as s,t as r,n as c}from"./main.44d3edf1.js";import{_ as f}from"./error.8a473308.js";import{_ as y}from"./FormInput.c8d17617.js";import{_ as g}from"./FormButton.b5bafa51.js";import{_ as p}from"./FormLabel.6d5eca29.js";const b={class:"input-group auth-pass-inputgroup"},k={name:"InputGroup",props:{type:{type:String},name:{type:String},text:{type:String},label:{type:String},icon:{type:String},placeholder:{type:String,default:"Enter Password"},id:{type:String},modelValue:null},emits:["update:modelValue","buttonClicked"],setup(e){return(o,t)=>(d(),u("div",null,[a(l(p,{label:e.label,for:e.id},null,8,["label","for"]),[[n,e.label]]),i("div",b,[l(y,{type:e.type,id:e.id,name:e.name,placeholder:e.placeholder,modelValue:e.modelValue,"onUpdate:modelValue":t[0]||(t[0]=m=>o.$emit("update:modelValue",m))},null,8,["type","id","name","placeholder","modelValue"]),l(g,{class:"btn btn-light shadow-none ms-0",type:"button",onButtonClicked:t[1]||(t[1]=()=>o.$emit("buttonClicked"))},{default:s(()=>[a(i("span",null,r(e.text),513),[[n,e.text!="undefined"||e.text.length]]),a(i("i",{class:c(e.icon)},null,2),[[n,e.icon]])]),_:1})]),l(f,{name:e.name},null,8,["name"])]))}};export{k as _};