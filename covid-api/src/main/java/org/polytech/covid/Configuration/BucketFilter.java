package org.polytech.covid.Configuration;

import io.github.bucket4j.Bucket;
import io.github.bucket4j.ConsumptionProbe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class BucketFilter implements Filter {

    private final Bucket bucket;

    @Autowired
    public BucketFilter(Bucket bucket) {
        this.bucket = bucket;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        ConsumptionProbe consumptionProbe = bucket.tryConsumeAndReturnRemaining(1);

        if(consumptionProbe.isConsumed()){
            chain.doFilter(request, response);
        }
        else{
            if (response instanceof HttpServletResponse) {

                ((HttpServletResponse) response).sendError(429, String.valueOf(consumptionProbe.getNanosToWaitForRefill()));
            } else {
                chain.doFilter(request, response);
            }
        }
    }
}
