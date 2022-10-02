//1º PASSO: MODELANDO;
class Stack {
  constructor() {
    this.data = []
    this.top = -1
  }

  push(value) {
    this.top++
    this.data[this.top] = value
    return this.data
  }

  pop(value) {
    if (this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top
    return poppedTop
  }

  peek(value) {
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}

//2º PASSO: UTILIZANDO;
const stack = new Stack()

//ADICIONAR DADOS;
stack.push('Learning')
stack.push('Data')

console.log(stack.push('Structures'))
console.log(stack.peek())

//REMOVER;
stack.pop()
console.log(stack.pop())
console.log(stack.peek())
