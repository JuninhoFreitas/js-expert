Quando fazemos uma passamos um callback como parametro de uma função
ele vai usar o contexto THIS da função, e não o do proprio callback,
isso pode ser solucionado passando como array function(lembrando que array function limpa os contextos), ou usando o .bind() para especificar qual o contexto

