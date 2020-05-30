import Container from '../../src/Container';

test('undefined', () => {
    expect(
        Container.compileAlign(undefined)
    ).toStrictEqual('');
});

test('main', () => {
    expect(
        Container.compileAlign({main: 'flex-start'})
    ).toStrictEqual('justify-content: flex-start');
});

test('cross', () => {
    expect(
        Container.compileAlign({cross: 'center'})
    ).toStrictEqual('align-items: center');
});

test('self', () => {
    expect(
        Container.compileAlign({self: 'center'})
    ).toStrictEqual('align-self: center');
});