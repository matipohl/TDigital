-- 1
select DATE_FORMAT("2012/03/01", "%M") as Month , sum(amount) from billing
where charged_datetime >= "2012/03/01" AND charged_datetime <= "2012/03/31";

-- 2
select client_id ,sum(amount) from billing
where client_id = 2;

-- 3
select client_id , domain_name as website from sites where client_id = 10;

-- 4
select client_id, count(domain_name) as number_of_websites, monthname(created_datetime) as Month, 
	year(created_datetime) as Year from sites
	where client_id = 1
	GROUP BY DATE(created_datetime);
    
select client_id, count(domain_name) as number_of_websites, monthname(created_datetime) as Month, 
	year(created_datetime) as Year from sites
	where client_id = 20
	GROUP BY DATE(created_datetime);
    
-- 5
select sites.domain_name as website, count(leads.leads_id) as number_of_leads, DATE_FORMAT(leads.registered_datetime, "%M %d, %Y") as date_generated
from sites
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= "2011/01/01" AND leads.registered_datetime <= "2011/02/15"
group by website;

-- 6
select concat(clients.first_name, " ", clients.last_name) as client_name, count(leads.leads_id) as number_of_leads
FROM clients 
INNER JOIN sites ON clients.client_id = sites.client_id
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= "2011/01/01" AND leads.registered_datetime <= "2011/12/31"
group BY client_name; 

-- 7 
select concat(clients.first_name, " ", clients.last_name) as client_name, count(leads.leads_id) as number_of_leads, DATE_FORMAT(leads.registered_datetime, "%M") as month_generated
FROM clients 
INNER JOIN sites ON clients.client_id = sites.client_id
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= "2011/01/01" AND leads.registered_datetime <= "2011/06/30"
group BY DATE(leads.registered_datetime);

-- 8
select concat(clients.first_name, " ", clients.last_name) as client_name, sites.domain_name as website, 
count(leads.leads_id) as number_of_leads, DATE_FORMAT(leads.registered_datetime, "%M %d, %Y") as date_generated
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= "2011/01/01" AND leads.registered_datetime <= "2011/12/31"
group by clients.client_id, sites.site_id;

select concat(clients.first_name, " ", clients.last_name) as client_name, sites.domain_name as website, 
count(leads.leads_id) as number_of_leads
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= "2001/01/01" AND leads.registered_datetime <= NOW()
group by clients.client_id, sites.site_id;

-- 9
select concat (clients.first_name, " ", clients.last_name) as client_name, sum(billing.amount) as total_amount,
 date_format(billing.charged_datetime, "%M") as month_charge, year(billing.charged_datetime) as year_charge
FROM clients
INNER JOIN billing ON clients.client_id = billing.client_id
group BY clients.client_id, month(billing.charged_datetime)
order by client_name, date(billing.charged_datetime);

-- 10
select concat (clients.first_name, " ", clients.last_name) as client_name, group_concat(sites.domain_name SEPARATOR " / ") as sites
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
group by client_name;





