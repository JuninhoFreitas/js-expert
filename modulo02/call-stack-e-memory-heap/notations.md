Call Stack  = Armazena os tipos primitivos que não crescem e são IMUTÁVEIS
Exemplos: string, number, bigint, boolean, undefined, and symbol
Quando cria um tipo primitivo, ele cria um identificador, dá um endereço e salva um valor

Memory Heap = Armazena os tipos não-primitivos, que são mutáveis por fazerem referência a um ENDEREÇO e não a um VALOR
Exemplos: Array, Function(Lembrando que tudo em JS é OBJETO), Objects
Quando cria um tipo não-primitivo, ele cria um identificador, dá um endereço que o valor é um endereço lá no memory heap



Identifiers ---------------- Call Stack ---------------- Heap
                         Address -- Value          Address -- Value
number1       ---------   A003   --   2
number2       ---------   A001   --   1
names         ---------   A004   --  B001  --------- B001  --  []