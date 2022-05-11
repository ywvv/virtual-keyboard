import './style.css';

const KEY_EVENT_CODES = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW',
  'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft',
  'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF',
  'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',
  'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight',
  'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Lang'];

const KEYS_EN = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'EN'];

const KEYS_EN_CAPS = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'EN'];

const KEYS_EN_SHIFT = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'EN'];

const KEYS_EN_CAPS_SHIFT = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'EN'];

const KEYS_RUS = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'RU'];

const KEYS_RUS_SHIFT = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'RU'];

const KEYS_RUS_CAPS = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'RU'];

const KEYS_RUS_CAPS_SHIFT = [
  'ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'RU'];

class Keyboard {
  constructor() {
    this.isShift = false;
    this.isCaps = false;
    this.isCapsShift = false;
    this.lang = localStorage.getItem('language') || 'ru';
    this.cursorPosition = null;
    this.letterInString = null;
    this.indexInString = null;
    this.currentPositionInString = null;
  }

  createTextarea() {
    this.textarea = document.createElement('textarea');
    this.textarea.className = 'textarea';
    document.body.appendChild(this.textarea);
  }

  createKeyboard() {
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    document.body.appendChild(this.keyboard);
    for (let i = 0; i < KEY_EVENT_CODES.length; i += 1) {
      this.key = document.createElement('button');
      this.key.className = 'key';
      this.key.dataset.code = KEY_EVENT_CODES[i];
      this.key.innerHTML = this.checkLang(i);
      this.keyboard.appendChild(this.key);
      this.keys = document.querySelectorAll('.key');
    }
  }

  createDescription() {
    this.description = document.createElement('div');
    this.description.className = 'description';
    document.body.appendChild(this.description);
    this.combination = document.createElement('div');
    this.combination.className = 'combination';
    this.description.appendChild(this.combination);
    this.combinationKeyCtrl = document.createElement('button');
    this.combinationKeyCtrl.className = 'combination__ctrl';
    this.combinationKeyCtrl.textContent = 'Ctrl';
    this.combination.appendChild(this.combinationKeyCtrl);
    this.combinationPlus = document.createElement('div');
    this.combinationPlus.className = 'combination__plus';
    this.combinationPlus.textContent = '+';
    this.combination.appendChild(this.combinationPlus);
    this.combinationKeyShift = document.createElement('button');
    this.combinationKeyShift.className = 'combination__shift';
    this.combinationKeyShift.textContent = 'Shift';
    this.combination.appendChild(this.combinationKeyShift);
    this.combinationSpan = document.createElement('span');
    this.combinationSpan.className = 'combination__span';
    this.combinationSpan.textContent = 'switch language';
    this.combination.appendChild(this.combinationSpan);
    this.madeFor = document.createElement('div');
    this.madeFor.className = 'made-for';
    this.madeFor.textContent = 'made for';
    this.description.appendChild(this.madeFor);
  }

  checkLang(i) {
    localStorage.setItem('language', this.lang);
    if (this.lang === 'en') {
      if (this.isShift === true) {
        return KEYS_EN_SHIFT[i];
      }
      if (this.isCaps === true) {
        return KEYS_EN_CAPS[i];
      }
      if (this.isCapsShift === true) {
        return KEYS_EN_CAPS_SHIFT[i];
      }
      return KEYS_EN[i];
    } else {
      if (this.isShift === true) {
        return KEYS_RUS_SHIFT[i];
      }
      if (this.isCaps === true) {
        return KEYS_RUS_CAPS[i];
      }
      if (this.isCapsShift === true) {
        return KEYS_RUS_CAPS_SHIFT[i];
      }
      return KEYS_RUS[i];
    }
  }

  addListeners() {
    document.addEventListener('keydown', (event) => this.onKeyDown(event));
    document.addEventListener('keyup', (event) => this.onKeyUp(event));
    this.keys.forEach((key) => key.addEventListener('mousedown', () => this.onMouseDown(key)));
    this.keys.forEach((key) => key.addEventListener('mouseup', () => this.onMouseUp(key)));
    this.textarea.addEventListener('click', (event) => {
      this.cursorPosition = event.target.selectionStart;
    });
  }

  onMouseDown(key) {
    switch (key.dataset.code) {
      case 'Space':
        this.textarea.value = `${this.textarea.value.slice(0, this.cursorPosition)} ${this.textarea.value.slice(this.cursorPosition)}`;
        this.cursorPosition += 1;
        break;
      case 'Tab':
        this.textarea.value = `${this.textarea.value.slice(0, this.cursorPosition)}        ${this.textarea.value.slice(this.cursorPosition)}`;
        this.cursorPosition += 8;
        break;
      case 'Backspace':
        if (this.cursorPosition > 0) {
          this.textarea.value = this.textarea.value.split('').filter((char, index) => index !== this.cursorPosition - 1).join('');
          this.cursorPosition -= 1;
        }
        break;
      case 'Delete':
        this.textarea.value = (this.textarea.value).split('').filter((char, index) => index !== this.cursorPosition).join('');
        break;
      case 'CapsLock':
        this.isCaps = !this.isCaps;
        for (let i = 0; i < this.keys.length; i += 1) {
          this.keys[i].innerHTML = this.checkLang(i);
        }
        key.classList.toggle('active');
        break;
      case 'ShiftLeft':
        this.isShift = true;
        for (let i = 0; i < this.keys.length; i += 1) {
          this.keys[i].innerHTML = this.checkLang(i);
        }
        break;
      case 'ShiftRight':
        this.isShift = true;
        for (let i = 0; i < this.keys.length; i += 1) {
          this.keys[i].innerHTML = this.checkLang(i);
        }
        break;
      case 'Enter':
        this.textarea.value = `${this.textarea.value.slice(0, this.cursorPosition)}\n${this.textarea.value.slice(this.cursorPosition)}`;
        this.cursorPosition += 1;
        break;
      case 'ArrowUp':
        this.countLetterInString();
        this.getIndexInString();
        if (this.letterInString[this.indexInString - 1]) {
          const countLetterLeft = this.currentPositionInString;
          const needRight = this.letterInString[this.indexInString - 1]
          - countLetterLeft + 1;
          if (this.letterInString[this.indexInString - 1] >= countLetterLeft) {
            this.cursorPosition -= (needRight + countLetterLeft);
            this.updateCursorPosition();
          } else {
            this.cursorPosition -= countLetterLeft + 1;
            this.updateCursorPosition();
          }
        } else {
          this.cursorPosition = 0;
          this.updateCursorPosition();
        }
        break;
      case 'ArrowRight':
        if (this.cursorPosition < this.textarea.value.length) {
          this.cursorPosition += 1;
        }
        break;
      case 'ArrowDown':
        this.countLetterInString();
        this.getIndexInString();
        if (this.letterInString[this.indexInString + 1]) {
          const countLetterRight = this.letterInString[this.indexInString]
          - this.currentPositionInString;
          const needLeft = this.letterInString[this.indexInString]
          - countLetterRight + 1;
          if (this.letterInString[this.indexInString + 1] >= needLeft) {
            this.cursorPosition += needLeft + countLetterRight;
            this.updateCursorPosition();
          } else {
            this.cursorPosition += this.letterInString[this.indexInString
              + 1] + countLetterRight + 1;
            this.updateCursorPosition();
          }
        } else {
          this.cursorPosition = this.textarea.value.length;
          this.updateCursorPosition();
        }
        break;
      case 'ArrowLeft':
        if (this.cursorPosition > 0) {
          this.cursorPosition -= 1;
        }
        break;
      case 'Lang':
        if (this.lang === 'en') {
          this.lang = 'ru';
        } else {
          this.lang = 'en';
        }
        for (let i = 0; i < this.keys.length; i += 1) {
          this.keys[i].innerHTML = this.checkLang(i);
        }
        break;
      case 'Alt':
        break;
      case 'ControlLeft':
        break;
      case 'AltRight':
        break;
      case 'ControlRight':
        break;
      case 'AltLeft':
        break;
      case 'MetaLeft':
        break;
      default:
        this.textarea.value = `${this.textarea.value.slice(0, this.cursorPosition)}${key.textContent}${this.textarea.value.slice(this.cursorPosition)}`;
        this.cursorPosition += 1;
    }
    if (this.isCaps === true && (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'ShiftRight')) {
      this.isCaps = false;
      this.isShift = false;
      this.isCapsShift = true;
      for (let i = 0; i < this.keys.length; i += 1) {
        this.keys[i].innerHTML = this.checkLang(i);
      }
    }
    this.updateCursorPosition();
    this.textarea.focus();
  }

  onMouseUp(key) {
    switch (key.dataset.code) {
      case 'ShiftLeft':
        this.isShift = false;
        for (let i = 0; i < this.keys.length; i += 1) {
          this.keys[i].innerHTML = this.checkLang(i);
        }
        break;
      case 'ShiftRight':
        this.isShift = false;
        for (let i = 0; i < this.keys.length; i += 1) {
          this.keys[i].innerHTML = this.checkLang(i);
        }
        break;
      default:
        break;
    }
    if (this.isCapsShift === true && (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'ShiftRight')) {
      this.isCaps = true;
      this.isShift = false;
      this.isCapsShift = false;
      for (let i = 0; i < this.keys.length; i += 1) {
        this.keys[i].innerHTML = this.checkLang(i);
      }
    }
    this.textarea.focus();
  }

  onKeyDown(event) {
    event.preventDefault();
    this.keys.forEach((key) => {
      if (key.dataset.code === event.code) {
        if (event.code !== 'CapsLock') {
          key.classList.add('active');
        }
        switch (key.dataset.code) {
          case 'Space':
            this.textarea.value = `${this.textarea.value.slice(0, this.cursorPosition)} ${this.textarea.value.slice(this.cursorPosition)}`;
            this.cursorPosition += 1;
            break;
          case 'Tab':
            this.textarea.value = `${this.textarea.value.slice(0, this.cursorPosition)}        ${this.textarea.value.slice(this.cursorPosition)}`;
            this.cursorPosition += 8;
            break;
          case 'Enter':
            this.textarea.value = `${this.textarea.value.slice(0, this.cursorPosition)}\n${this.textarea.value.slice(this.cursorPosition)}`;
            this.cursorPosition += 1;
            break;
          case 'Backspace':
            if (this.cursorPosition > 0) {
              this.textarea.value = this.textarea.value.split('').filter((char, index) => index !== this.cursorPosition - 1).join('');
              this.cursorPosition -= 1;
            }
            break;
          case 'Delete':
            this.textarea.value = (this.textarea.value).split('').filter((char, index) => index !== this.cursorPosition).join('');
            break;
          case 'ShiftLeft':
            this.isShift = !this.isCapsShift;
            for (let i = 0; i < this.keys.length; i += 1) {
              this.keys[i].innerHTML = this.checkLang(i);
            }
            break;
          case 'ShiftRight':
            this.isShift = !this.isCapsShift;
            for (let i = 0; i < this.keys.length; i += 1) {
              this.keys[i].innerHTML = this.checkLang(i);
            }
            break;
          case 'CapsLock':
            this.isCaps = !this.isCaps;
            for (let i = 0; i < this.keys.length; i += 1) {
              this.keys[i].innerHTML = this.checkLang(i);
            }
            key.classList.toggle('active');
            break;
          case 'ArrowUp':
            this.countLetterInString();
            this.getIndexInString();
            if (this.letterInString[this.indexInString - 1] !== undefined) {
              const countLetterLeft = this.currentPositionInString;
              const needRight = this.letterInString[this.indexInString - 1]
              - countLetterLeft + 1;
              if (this.letterInString[this.indexInString - 1] >= countLetterLeft) {
                this.cursorPosition -= (needRight + countLetterLeft);
                this.updateCursorPosition();
              } else {
                this.cursorPosition -= countLetterLeft + 1;
                this.updateCursorPosition();
              }
            } else {
              this.cursorPosition = 0;
              this.updateCursorPosition();
            }
            break;
          case 'ArrowRight':
            if (this.cursorPosition < this.textarea.value.length) {
              this.cursorPosition += 1;
            }
            break;
          case 'ArrowDown':
            this.countLetterInString();
            this.getIndexInString();
            if (this.letterInString[this.indexInString + 1] !== undefined) {
              const countLetterRight = this.letterInString[this.indexInString]
              - this.currentPositionInString;
              const needLeft = this.letterInString[this.indexInString]
              - countLetterRight + 1;
              if (this.letterInString[this.indexInString + 1] >= needLeft) {
                this.cursorPosition += needLeft + countLetterRight;
                this.updateCursorPosition();
              } else {
                this.cursorPosition += this.letterInString[this.indexInString
                  + 1] + countLetterRight + 1;
                this.updateCursorPosition();
              }
            } else {
              this.cursorPosition = this.textarea.value.length;
              this.updateCursorPosition();
            }
            break;
          case 'ArrowLeft':
            if (this.cursorPosition > 0) {
              this.cursorPosition -= 1;
            }
            break;
          case 'Alt':
            break;
          case 'ControlLeft':
            break;
          case 'ControlRight':
            break;
          case 'AltLeft':
            break;
          case 'AltRight':
            break;
          case 'MetaLeft':
            break;
          case 'MetaRight':
            break;
          default:
            this.textarea.value = `${this.textarea.value.slice(0, this.cursorPosition)}${key.textContent}${this.textarea.value.slice(this.cursorPosition)}`;
            this.cursorPosition += 1;
        }
        this.updateCursorPosition();
      }
    });
    if (event.shiftKey && event.ctrlKey) {
      if (this.lang === 'en') {
        this.lang = 'rus';
      } else {
        this.lang = 'en';
      }
      for (let i = 0; i < this.keys.length; i += 1) {
        this.keys[i].innerHTML = this.checkLang(i);
      }
    }
    if (this.isCaps === true && event.key	=== 'Shift') {
      this.isCaps = false;
      this.isShift = false;
      this.isCapsShift = true;
      for (let i = 0; i < this.keys.length; i += 1) {
        this.keys[i].innerHTML = this.checkLang(i);
      }
    }
    this.textarea.focus();
  }

  onKeyUp(event) {
    event.preventDefault();
    this.keys.forEach((key) => {
      if (key.dataset.code === event.code && key.dataset.code !== 'CapsLock') {
        key.classList.remove('active');
      }
    });
    if (this.isCapsShift === true && event.key	=== 'Shift') {
      this.isCaps = true;
      this.isShift = false;
      this.isCapsShift = false;
      for (let i = 0; i < this.keys.length; i += 1) {
        this.keys[i].innerHTML = this.checkLang(i);
      }
    }
    if (event.key	=== 'Shift') {
      this.isShift = false;
      for (let i = 0; i < this.keys.length; i += 1) {
        this.keys[i].innerHTML = this.checkLang(i);
      }
    }
  }

  updateCursorPosition() {
    this.textarea.selectionStart = this.cursorPosition;
    this.textarea.selectionEnd = this.cursorPosition;
  }

  countLetterInString() {
    const split = (this.textarea.value).split('\n').map((line) => line.length);
    this.letterInString = split.flat();
  }

  getIndexInString() {
    let countIndex = 0;
    let countS = this.cursorPosition;
    if (this.letterInString.length === 1) {
      this.currentPositionInString = countS;
    } else {
      for (let i = 0; i < this.letterInString.length; i += 1) {
        if (countS <= this.letterInString[i]) {
          this.indexInString = countIndex;
          break;
        }
        countS -= this.letterInString[i];
        countIndex += 1;
        countS -= 1;
      }
      this.currentPositionInString = countS;
    }
  }
}

window.onload = () => {
  const keyboard = new Keyboard();
  keyboard.createTextarea();
  keyboard.createKeyboard();
  keyboard.createDescription();
  keyboard.addListeners();
};
