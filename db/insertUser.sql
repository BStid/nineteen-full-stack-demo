insert into customer
  (session_id)
values
  ($1);

select *
from customer
where session_id = $1;