import Container from '../../src/Container';

test('undefined', () => {
    expect(
        Container.compileBorderColor(undefined)
    ).toStrictEqual('');
});

test('number', () => {
    expect(
        Container.compileBorderColor(undefined)
    ).toStrictEqual('');
});

test('shorthand', () => {
    expect(
        Container.compileBorderColor('1 solid red')
    ).toStrictEqual('border-color: red');
});

test('object', () => {
    expect(
        Container.compileBorderColor({color: 'red'})
    ).toStrictEqual('border-color: red');
});

test('not all', () => {
    expect(
        Container.compileBorderColor({color: 'red', bottom: {width: 1}})
    ).toStrictEqual('border-color: red');
});