import { computed } from 'vue';

export const useLabel = (props, emit) => {
  const icons = import.meta.glob('../assets/icons/*.svg', { eager: true, query: '?raw', import: 'default' });

  const iconSrc = computed(() => {
    if (props.isEdit) return 'edit';
    if (props.isRemove) return 'remove';
    return null;
  });

  const iconContent = computed(() => {
    return iconSrc.value ? icons[`../assets/icons/${iconSrc.value}.svg`] : '';
  });

  const colorWithOpacity = computed(() => {
    let color = props.color;
    if (!color?.startsWith('#')) return '';

    if (color.length === 4) {
      color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }

    if (color.length !== 7) return '';

    const [r, g, b] = color
      .substring(1)
      .match(/.{2}/g)
      .map((hex) => parseInt(hex, 16));

    return `rgba(${r}, ${g}, ${b}, 0.4)`;
  });

  const handleClick = () => {
    emit('clickLabel');
    emit('click');
  };

  return {
    colorWithOpacity,
    iconContent,

    handleClick,
  };
}
