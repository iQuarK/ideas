import _map from 'lodash/map';
import _omit from 'lodash/omit';
import _findIndex from 'lodash/findIndex';

export const store = idea => {
    const ideas = JSON.parse(localStorage.getItem('ideas'));
    const mapped = _map(ideas, item => _omit(item, ['new']));
    const data = [...mapped, _omit(idea, ['new'])];
    localStorage.setItem('ideas', JSON.stringify(data));
};

export const load = () => JSON.parse(localStorage.getItem('ideas')) || [];

export const update = (id, field, value) => {
    let ideas = load();
    const index = _findIndex(ideas, i => {
        return i.id === id;
    });
    if (index > -1) {
        ideas[index][field] = value;
        localStorage.setItem('ideas', JSON.stringify(ideas));
    }
};