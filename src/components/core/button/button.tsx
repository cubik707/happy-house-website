import styles from './button.module.css';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: string | React.ReactNode; // Новый проп для иконки
};

export const Button = ({
  onClick,
  children,
  width,
  height,
  type = 'button',
  disabled = false,
  icon,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      type={type}
      disabled={disabled}
      style={{ width, height }}
    >
      {icon && (
        <span className={styles.icon}>
          {typeof icon === 'string' ? <img src={icon} alt='icon' /> : icon}
        </span>
      )}
      {children}
    </button>
  );
};
