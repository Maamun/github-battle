import React, {
  Component,
} from 'react';

export default class Popular extends Component {
  render() {
    const languages = [
      'All',
      'JavaScript',
      'Ruby',
      'Java',
      'CSS',
      'Python',
    ];
    return (
      <div className="flex-center">
        <ul className="nav-link">
          {languages.map((language) => (
            <li key="languages">
              <button>
                {language}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
