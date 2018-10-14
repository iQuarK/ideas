import _map from 'lodash/map';
import _omit from 'lodash/omit';
import _findIndex from 'lodash/findIndex';

export const store = idea => {
    const ideas = JSON.parse(localStorage.getItem('ideas'));
    const mapped = _map(ideas, item => _omit(item, ['new']));
    const data = [...mapped, _omit(idea, ['new'])];
    save(data);
};

export const load = () => JSON.parse(localStorage.getItem('ideas')) || [];

const save = ideas => localStorage.setItem('ideas', JSON.stringify(ideas));

export const update = (id, field, value) => {
    let ideas = load();
    const index = _findIndex(ideas, i => {
        return i.id === id;
    });
    if (index > -1) {
        ideas[index][field] = value;
        save(ideas);
    }
};

export const remove = id => {
    const ideas = load();
    const filtered = ideas.filter(item => item.id !== id);
    save(filtered);
    return filtered;
};
