import _map from 'lodash/map';
import _omit from 'lodash/omit';
import _findIndex from 'lodash/findIndex';
import axios from 'axios';

export const store = idea => {
    const ideas = JSON.parse(localStorage.getItem('ideas'));
    const mapped = _map(ideas, item => _omit(item, ['new']));
    const data = [...mapped, _omit(idea, ['new'])];
    save(data);
};

export const load = () => JSON.parse(localStorage.getItem('ideas')) || [];

export const save = ideas => localStorage.setItem('ideas', JSON.stringify(ideas));

export const update = (id, field, value) => {
    let ideas = load();
    const index = _findIndex(ideas, i => {
        return i.id === id;
    });
    if (index > -1) {
        ideas[index][field] = value;
        updateAll(ideas[index].id, ideas[index].title, ideas[index].body).then(() => save(ideas));
    }
};

export const updateAll = (id, title, body) => axios.post(`${host}/idea/update`, 
{ id: id, title: title, body: body }
);

export const remove = id => {
    const ideas = load();
    const filtered = ideas.filter(item => item.id !== id);
    axios.post(`${host}/idea/delete`, { id: id });
    save(filtered);
    return filtered;
};

const host = 'http://localhost:3001';

export const create = () => axios.get(`${host}/ideas/new`);

export const fetchAll = () => axios.get(`${host}/ideas`);
