import View from './View';
import icons from 'url:../../img/icons.svg'; //parcel 2
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found !';
  _message = '';
  _generateMarkup() {
    console.log(this._data);

    return this._data
      .map(res => {
        return ` <li class="preview">
    <a class="preview__link preview__link--active" href="#${res.id}">
      <figure class="preview__fig">
        <img src="${res.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${res.title}</h4>
        <p class="preview__publisher">${res.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
      })
      .join('');
  }
}

export default new ResultsView();
