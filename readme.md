# Estudos JavaScript - Back-end

Este repositório contém exemplos e exercícios de conceitos fundamentais de JavaScript, com foco em desenvolvimento back-end.

## Arrays e Métodos de Array

### Métodos de Adição e Remoção

#### Adicionando Elementos
- `push()`: Adiciona elementos ao final do array
  ```javascript
  const array = [];
  array.push(1, 2, 3); // Adiciona elementos ao final
  // Retorna o novo length do array
  // Modifica o array original
  ```

- `unshift()`: Adiciona elementos no início do array
  ```javascript
  array.unshift(10); // Adiciona no início do array
  // Retorna o novo length do array
  // Modifica o array original e reindexando todos os elementos existentes
  ```

#### Removendo Elementos
- `shift()`: Remove o primeiro elemento do array
  ```javascript
  array.shift(); 
  // Remove e retorna o primeiro elemento
  // Modifica o array original e reindexando todos os elementos restantes
  ```

### Métodos de Manipulação

#### splice()
O método splice() é extremamente versátil, permitindo adicionar e remover elementos de qualquer posição do array.
```javascript
array.splice(startIndex, deleteCount, ...itemsToAdd);
```
- `startIndex`: Índice onde começar a modificação
- `deleteCount`: Quantidade de elementos a remover
- `itemsToAdd`: Elementos a serem inseridos na posição

Exemplos práticos:
```javascript
const frutas = ['maçã', 'banana', 'laranja', 'uva'];

// Removendo elementos
frutas.splice(1, 2); // Remove 'banana' e 'laranja'
// frutas agora é ['maçã', 'uva']

// Adicionando elementos
frutas.splice(1, 0, 'pera', 'manga'); // Adiciona sem remover nada
// frutas agora é ['maçã', 'pera', 'manga', 'uva']

// Substituindo elementos
frutas.splice(1, 2, 'kiwi'); // Remove 'pera' e 'manga', adiciona 'kiwi'
// frutas agora é ['maçã', 'kiwi', 'uva']
```

#### slice()
Cria uma cópia superficial (shallow copy) de parte de um array.
```javascript
array.slice(startIndex, endIndex);
```
- Não modifica o array original
- `startIndex`: Índice inicial (inclusive)
- `endIndex`: Índice final (exclusive)
- Retorna um novo array

Exemplos práticos:
```javascript
const numeros = [1, 2, 3, 4, 5];

// Copiando parte do array
const parte = numeros.slice(1, 3); // [2, 3]

// Copiando até o final
const final = numeros.slice(2); // [3, 4, 5]

// Copiando o array inteiro
const copia = numeros.slice(); // [1, 2, 3, 4, 5]

// Usando índices negativos
const ultimos = numeros.slice(-2); // [4, 5]
```

#### concat()
Combina dois ou mais arrays, criando um novo array.
```javascript
const novoArray = array1.concat(array2, array3, ...);
```
- Não modifica nenhum dos arrays originais
- Cria um novo array com todos os elementos
- Pode concatenar valores individuais também

Exemplos práticos:
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

// Concatenando arrays
const combinado = arr1.concat(arr2, arr3); // [1, 2, 3, 4, 5, 6]

// Concatenando com valores
const comValores = arr1.concat(3, [4, 5], 6); // [1, 2, 3, 4, 5, 6]
```

### Quando Usar Cada Método?

#### push() vs splice() vs concat()

1. Use `push()` quando:
   - Precisar adicionar elementos ao final do array
   - Quiser uma operação rápida (O(1))
   - Não precisar inserir em posição específica

2. Use `splice()` quando:
   - Precisar inserir/remover em posição específica
   - Precisar substituir elementos
   - Não se importar com a performance em arrays grandes (O(n))

3. Use `concat()` quando:
   - Não quiser modificar os arrays originais
   - Precisar combinar múltiplos arrays
   - Quiser uma operação imutável
   - Precisar manter os arrays originais intactos

4. Use `slice()` quando:
   - Precisar de uma cópia de parte do array
   - Não quiser modificar o array original
   - Precisar extrair uma sequência de elementos

### Arrays Esparsos
Arrays esparsos são arrays que possuem "buracos" - posições não definidas entre elementos.
```javascript
const esparso = [];
esparso[4] = "valor1"; // Cria um array com posições vazias
```

## Estruturas de Controle

### Loops
- `for` tradicional:
  ```javascript
  for (let i = array.length - 1; i >= 0; i--) {
      // código
  }
  ```

- `while`:
  ```javascript
  while (array.length > 0) {
      // código
  }
  ```

## Operadores

### Operador Ternário
Usado para condicionais simples:
```javascript
condicao ? valorSeVerdadeiro : valorSeFalso
```

Exemplo prático:
```javascript
clinica[0] ? `Animais restantes: ${clinica}` : "Nenhum animal na clínica"
```

## Manipulação de Arrays

### Exemplo Prático: Sistema de Clínica Veterinária
- Implementação de uma fila de atendimento usando arrays
- Remoção sequencial de elementos
- Controle de estado do array
- Exibição de mensagens condicionais

```javascript
const clinica = [];
clinica.push("Cachorro", "Gato", "Coelho");
// Processamento da fila de atendimento
```

## Boas Práticas

1. **Índices de Array**
   - Arrays em JavaScript começam no índice 0
   - Último índice válido é sempre length - 1

2. **Manipulação de Arrays**
   - Cuidado ao modificar arrays durante iterações
   - Preferir métodos específicos (push, shift) em vez de manipulação direta de índices

3. **Template Strings**
   - Uso de `` para criar strings com interpolação
   - Facilita a concatenação de variáveis com texto
   ```javascript
   console.log(`Valor: ${variavel}`);
   ```

## Exercícios Implementados

1. Arrays Esparsos
2. Manipulação de Elementos em Array
3. Sistema de Fila (Clínica Veterinária)
4. Operações com Números em Arrays

---
Este material continua em desenvolvimento, com novos conceitos sendo adicionados conforme o avanço dos estudos.
