function justInvoke(func){
  return func();
}

function setThisWithCall(func, thisValue, argument) {
  return func.call(thisValue, argument);
}

function setThisWithApply(func, thisValue, manyArg){
  return func.apply(thisValue, manyArg);
}

function returnNewFunctionOf(functionToBeCopied, fred){
  const newFunc = functionToBeCopied.bind(fred);
  return newFunc;
}
