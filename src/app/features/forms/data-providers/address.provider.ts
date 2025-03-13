import {OptionWithHint} from '@modules/forms';
import {of} from 'rxjs';

export function addressDataProvider(term: string) {
  const selectItemsWithHints: Array<OptionWithHint<any>> = [
    {id: '1', label: 'Label 1', hint: 'Hint 1'},
    {id: '2', label: 'Label 2', hint: 'Hint 2'},
    {id: '3', label: 'Label 3', hint: 'Hint 3'},
    {id: '4', label: 'Label 4', hint: 'Hint 4'},
  ];
  const foundedItems = selectItemsWithHints.filter(
    (item) =>
      term == '' ||
      item.label.toLowerCase() == term.toLowerCase() ||
      item.label.toLowerCase().includes(term.toLowerCase())
  );
  return foundedItems && foundedItems.length ? of(foundedItems) : of(null);
}
