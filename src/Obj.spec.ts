import * as Obj  from './Obj';

describe('Obj', () => {
    
    it('dot', async () => {
        let obj = {
            'value': 2,
            'simple_object':
                {
                    'desk': {
                        'price': 100
                    }
                },
            'object_with_array':
                {
                    'desk': {
                        'price': [
                            'A',
                            'B',
                        ]
                    }
                },
            'array_object':
                [
                    {
                    'desk': {
                        'price': [
                            'A',
                            'B',
                        ]
                    }
                },
                {
                    'desk': {
                        'price': [
                            'A',
                            'B',
                        ]
                    }
                },
            ]
        };
        
        expect(Obj.dot(obj))
            .toEqual(
                {
                    'value': 2,
                    'simple_object.desk.price': 100,
                    'object_with_array.desk.price.0': 'A',
                    'object_with_array.desk.price.1': 'B',
                    'array_object.0.desk.price.0': 'A',
                    'array_object.0.desk.price.1': 'B',
                    'array_object.1.desk.price.0': 'A',
                    'array_object.1.desk.price.1': 'B'
                });
    });
    
    it('set', async () => {
        let obj = {
            'value': 2,
        };
        
        expect(Obj.set(obj, 'simple_object.desk.price', 100))
            .toEqual(
                {
                    'value': 2,
                    'simple_object':
                        {
                            'desk': {
                                'price': 100
                            }
                        },
                });

        let obj2 = {
            'value': 2,
            'simple_object':
                {
                    'desk': {
                        'price2': 200
                    }
                },
        };

        expect(Obj.set(obj2, 'simple_object.desk.price', 100))
            .toEqual(
                {
                    'value': 2,
                    'simple_object':
                        {
                            'desk': {
                                'price': 100,
                                'price2': 200
                            }
                        },
                });
    });
    
    it('get', async () => {
        let obj = {
            'value': 2,
            'simple_object':
                {
                    'desk': {
                        'price': 100
                    }
                },
            'object_with_array':
                {
                    'desk': {
                        'price': [
                            'A',
                            'B',
                        ]
                    }
                },
        };
        
        expect(100).toEqual(Obj.get(obj, 'simple_object.desk.price'));
        expect(2).toEqual(Obj.get(obj, 'value'));
        expect('A').toEqual(Obj.get(obj, 'object_with_array.desk.price.0'));
        expect(null).toEqual(Obj.get(obj, 'object_with_array.desk.price.2'));
        expect(null).toEqual(Obj.get(obj, 'value2'));
        expect(null).toEqual(Obj.get(obj, 'simple_object.desk.price2'));
    });
    
    it('add', async () => {
        let obj = {
            'value': 2,
            'simple_object':
            {
                'desk': {
                    'price': 100
                }
            },
        };
        
        expect({
            'value': 2,
            'simple_object':
                {
                    'desk': {
                        'price': 100
                    }
                },
        }).toEqual(Obj.add(obj, 'simple_object.desk.price', 200));

        expect({
            'value': 2,
            'simple_object':
                {
                    'desk': {
                        'price': 100,
                        'price2': 200,
                    }
                },
        }).toEqual(Obj.add(obj, 'simple_object.desk.price2', 200));

        expect({
            'value': 2,
            'simple_object':
                {
                    'desk': {
                        'price': 100,
                        'price2': 200,
                    }
                },
        }).toEqual(Obj.add(obj, 'simple_object.desk.price2', 200));
    });
    
});
