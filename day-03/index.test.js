const { BinaryTree } = require('./index');


describe('node based data structures', () => {
  it('add node should add node', () => {
    const A = new BinaryTree('A');
    const B = new BinaryTree('B');
    const C = new BinaryTree('C');
    const D = new BinaryTree('D');
    B.addTree(A);
    B.addTree(D);
    B.addTree(C);
    expect(B.right).toEqual({ 'addTree':
    expect.any(Function), 'findPerson': expect.any(Function), 'data': 'D', 'left':
    { 'addTree': expect.any(Function), 'findPerson': expect.any(Function),
      'data': 'C', 'left': null, 'right': null }, 'right': null });
  });
  it('find(person should return person', () => {
    const toni = new BinaryTree('Toni');
    const o = new BinaryTree(0);
    const romeo = new BinaryTree('Romeo');
    const ash = new BinaryTree('Ash');

    toni.addTree(o);
    toni.addTree(romeo);
    toni.addTree(ash);

    expect(toni.findPerson('Toni')).toEqual({
      'addTree': expect.any(Function), 'findPerson': expect.any(Function), data: 'Toni',
      'left': expect.any(Object), 'right': expect.any(Object)
    });

    expect(toni.findPerson('Lucas')).toEqual(null);
  });

});
