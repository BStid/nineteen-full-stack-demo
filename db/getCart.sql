select *
from cart c
  join products p
  on p.id = c.prod_id
where c.user_id = (
  select id
from customer
where session_id = $1
);
