let x: [string, number]

enum exapmle {
  No = 0,
  Yes = 'YES'
}

/* 声明 */
interface IA {
  id: string
}
type TA = {
  id: string
}
/* 继承 */
interface IA2 extends IA {
    name: string
}
type TA2 = TA & { name: string }
/* 实现 */
class A implements IA {
    id: string = ''
}
class A2 implements TA {
    id: string = ''
}

