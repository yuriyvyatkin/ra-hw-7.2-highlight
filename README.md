# Домашнее задание №2 к лекции «HOC»

[![Build status](https://ci.appveyor.com/api/projects/status/9stpcxljki4d4l4f?svg=true)](https://ci.appveyor.com/project/yuriyvyatkin/ra-hw-7-2-highlight)

[Ссылка на Github Pages](https://yuriyvyatkin.github.io/ra-hw-7.2-highlight/)

Подсвечивание блоков
===

На нашем сайте есть блоки со статьями и с видео записями.

![Highlight](./assets/highlight.png)

Мы решили улучшить отображение наших блоков таким образом,
чтобы популярные статьи и видео (1000+ прочтений/просмотров)
оборачивались в компонент `Popular`, а с количеством до
100 в компонент `New`. Эти компоненты будут менять внешний
облик блоков привлекая внимание посетителей.

## Реализация

Используя HOC обернуть `Video` и `Article` таким образом, чтобы при отображении в компоненте `List` они помещались внутрь требуемого компонента `Popular` или `New`.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` из данного каталога в качестве отправной точки (замените ими те, что создаются в create-react-app).
