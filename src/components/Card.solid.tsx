import { createSignal, Match, ParentProps, Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

type CardProps = {
  title: string;
	href: string;
}

export const Card = (props: ParentProps<CardProps>) => {
  const [local, others] = splitProps(props, ["children"]);
  
  return (
    <li class="link-card">
      <a href={others.href}>
        <h2>
          {others.title}
          <span>&rarr;</span>
        </h2>
        <p>
          {local.children}
        </p>
      </a>
    </li>
  );
};

export default Card;